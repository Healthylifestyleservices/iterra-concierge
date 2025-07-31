import { IntakeStorageService } from './IntakeStorageService';

export interface IntakeFormData {
  user_id: string;
  intake_type: string;
  details: {
    name: string;
    age: string;
    primaryConcern: string;
    emotionalState: string;
    chakraFocus: string;
    petOwner: boolean;
    petType: string;
    experienceLevel: string;
    preferences: string[];
  };
  status: string;
}

export class IntakeSubmissionHandler {
  static async submitIntake(formData: IntakeFormData) {
    try {
      const intakeId = `intake_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const protocolId = `protocol_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Store intake data
      const intakeResult = await IntakeStorageService.storeIntakeData(formData);
      if (!intakeResult.success) {
        throw new Error(intakeResult.error);
      }

      // Generate recommendations
      const recommendations = this.generateRecommendations(formData.details);
      
      // Create protocol data
      const protocolData = {
        id: protocolId,
        user_id: formData.user_id,
        intake_response_id: intakeId,
        protocol_data: {
          recommendations,
          chakra_focus: formData.details.chakraFocus,
          emotional_state: formData.details.emotionalState,
          pet_safe: formData.details.petOwner,
          primary_concern: formData.details.primaryConcern
        }
      };

      // Store protocol data
      const protocolResult = await IntakeStorageService.storeProtocolData(protocolData);
      if (!protocolResult.success) {
        throw new Error(protocolResult.error);
      }

      return {
        success: true,
        intake_id: intakeId,
        protocol_id: protocolId,
        recommendations,
        message: 'Intake submitted successfully',
        data: {
          intake: intakeResult.data,
          protocol: protocolResult.data
        }
      };

    } catch (error) {
      console.error('Error submitting intake:', error);
      return {
        success: false,
        error: 'Failed to submit intake',
        details: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private static generateRecommendations(details: IntakeFormData['details']) {
    const recommendations: string[] = [];
    
    // Emotional state recommendations
    switch (details.emotionalState) {
      case 'Stressed':
        recommendations.push('Lavender', 'Bergamot', 'Frankincense');
        break;
      case 'Anxious':
        recommendations.push('Chamomile', 'Ylang Ylang', 'Vetiver');
        break;
      case 'Energized':
        recommendations.push('Peppermint', 'Lemon', 'Eucalyptus');
        break;
      case 'Peaceful':
        recommendations.push('Sandalwood', 'Cedarwood', 'Frankincense');
        break;
      case 'Grounded':
        recommendations.push('Vetiver', 'Patchouli', 'Cedarwood');
        break;
      case 'Focused':
        recommendations.push('Rosemary', 'Peppermint', 'Lemon');
        break;
      case 'Joyful':
        recommendations.push('Orange', 'Grapefruit', 'Bergamot');
        break;
      default:
        recommendations.push('Lavender', 'Lemon', 'Peppermint');
    }

    // Chakra-based recommendations
    switch (details.chakraFocus) {
      case 'Root':
        recommendations.push('Vetiver', 'Cedarwood', 'Patchouli');
        break;
      case 'Sacral':
        recommendations.push('Orange', 'Ylang Ylang', 'Sandalwood');
        break;
      case 'Solar Plexus':
        recommendations.push('Lemon', 'Ginger', 'Peppermint');
        break;
      case 'Heart':
        recommendations.push('Rose', 'Geranium', 'Bergamot');
        break;
      case 'Throat':
        recommendations.push('Eucalyptus', 'Tea Tree', 'Chamomile');
        break;
      case 'Third Eye':
        recommendations.push('Frankincense', 'Clary Sage', 'Juniper Berry');
        break;
      case 'Crown':
        recommendations.push('Frankincense', 'Sandalwood', 'Lavender');
        break;
    }

    return [...new Set(recommendations)];
  }
}
